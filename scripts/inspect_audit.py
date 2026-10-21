import json

with open('evidence/audit_raw.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

output = []

def p(text=""):
    output.append(str(text))

p("=== URLS TESTED ===")
for u in data.get('urls_tested', []):
    p(f"{u.get('status')} : {u.get('url')} ({u.get('title', '')})")

p("\n=== ASSETS FOUND IN RAW AUDIT ===")
for a in data.get('assets', []):
    p(f"[{a.get('type')}] page={a.get('page')} alt={a.get('alt')} src={a.get('src')}")

p("\n=== DESIGN TOKENS ===")
tokens = data.get('design_tokens', {})
p(f"Colors: {json.dumps(tokens.get('colors'), indent=2)}")
p(f"Fonts: {json.dumps(tokens.get('fonts'), indent=2)}")

for p_key, p_val in data.get('pages', {}).items():
    p(f"\n========================================\nPAGE: {p_key}")
    p(f"URL: {p_val.get('url')}")
    p(f"Title: {p_val.get('title')}")
    p(f"Meta: {json.dumps(p_val.get('meta', {}), indent=2)}")
    p("Headings:")
    for h in p_val.get('headings', []):
        p(f"  [{h.get('tag')}] {h.get('text')}")
    p("Text Blocks:")
    for t in p_val.get('textBlocks', []):
        tag = t.get('tag')
        parent = t.get('parentTag')
        txt = t.get('text')
        p(f"  * <{tag} in <{parent}>>: {txt}")
    p("Links:")
    for l in p_val.get('links', []):
        p(f"  * [{l.get('text')}] -> {l.get('href')}")
    p("Buttons:")
    for b in p_val.get('buttons', []):
        p(f"  * {b}")
    p("Forms:")
    for fm in p_val.get('forms', []):
        p(f"  * {fm}")
    p("Images:")
    for im in p_val.get('images', []):
        p(f"  * {im.get('alt')} -> {im.get('src')}")

with open('evidence/audit_details.txt', 'w', encoding='utf-8') as f_out:
    f_out.write('\n'.join(output))

print(f"Wrote {len(output)} lines to evidence/audit_details.txt")

