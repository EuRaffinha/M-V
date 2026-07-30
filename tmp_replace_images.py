from pathlib import Path
import difflib
import re
import shutil

root = Path(r"c:\Users\VETBAHIA\Documents\mv-gospel-wear")
source_dir = root / "BLESSED CHOICE (1)"
target_dirs = [
    root / "public" / "images" / "products" / "feminina",
    root / "public" / "images" / "products" / "masculina",
    root / "public" / "images" / "products" / "oversized",
]


def normalize(text: str) -> str:
    text = (text or "").lower()
    for old, new in [
        ("ç", "c"), ("ã", "a"), ("á", "a"), ("à", "a"), ("â", "a"),
        ("é", "e"), ("ê", "e"), ("í", "i"), ("ó", "o"), ("ô", "o"), ("ú", "u"),
        ("&", " and "),
    ]:
        text = text.replace(old, new)
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def score(target_name: str, source_name: str) -> float:
    target = normalize(target_name)
    source = normalize(source_name)
    if not target or not source:
        return -1.0
    target_tokens = set(target.split())
    source_tokens = set(source.split())
    overlap = len(target_tokens & source_tokens)
    for token in target_tokens:
        if token in source_tokens:
            overlap += 2
    ratio = difflib.SequenceMatcher(None, target, source).ratio()
    return overlap + ratio

source_files = [p for p in source_dir.rglob("*") if p.is_file() and p.suffix.lower() == ".webp"]
if not source_files:
    raise SystemExit("Nenhum arquivo .webp encontrado na pasta nova")

replaced = []
for target_dir in target_dirs:
    for target_path in sorted(target_dir.glob("*.webp")):
        best_source = None
        best_score = -1.0
        for src in source_files:
            candidate = score(target_path.stem, src.stem)
            if candidate > best_score:
                best_score = candidate
                best_source = src
        if best_source and best_score >= 0.45:
            shutil.copy2(best_source, target_path)
            replaced.append((target_path.relative_to(root).as_posix(), best_source.relative_to(root).as_posix(), round(best_score, 3)))

print(f"Substituídas {len(replaced)} imagens")
for item in replaced:
    print(item)
