import os
import re
import glob

def get_max_length(fallback_text):
    l = len(fallback_text)
    if l < 30: return 60
    if l < 60: return 150
    if l < 200: return 600
    return 2000

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Matches textOrFallback(..., "...")
    # Using a regex that handles nested quotes is tricky. We'll find textOrFallback calls.
    # Let's use a simpler regex for finding textOrFallback(expr, "string")
    
    # We will look for: textOrFallback( \s* [^,]+ \s* , \s* ("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*') \s* )
    # Let's do it carefully.
    
    pattern = re.compile(r'textOrFallback\(\s*([^,]+)\s*,\s*("(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\')\s*\)')
    
    def replacer(match):
        expr = match.group(1)
        fallback = match.group(2)
        fallback_str = fallback[1:-1] # remove quotes
        max_len = get_max_length(fallback_str)
        return f'textOrFallback({expr}, {fallback}, {max_len})'

    new_content = pattern.sub(replacer, content)
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

for root, _, files in os.walk('/Users/mac/Documents/moksha-sewa-all-folder/moksha_clone_voyage/components'):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            process_file(os.path.join(root, file))

