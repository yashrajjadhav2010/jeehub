import re
with open("src/questions/physics/newtons-laws-of-motion/pyq.ts", "r") as f:
    text = f.read()

# First, let's grab the part before the bad insertion
match = re.search(r'nlm-pyq-q25".*?\}', text, re.DOTALL)
if match:
    cut_idx = match.end()
    text = text[:cut_idx] + "\n  ]\n};\n\nexport default pyq;\n"
    with open("src/questions/physics/newtons-laws-of-motion/pyq.ts", "w") as f:
        f.write(text)
    print("Fixed corrupted file.")
else:
    print("Could not find q25")
