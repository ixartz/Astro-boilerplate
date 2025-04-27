#!/bin/bash

SRC_DIR="./src"
DEST_DIR="/tmp/exports"
STRUCTURE_FILE="$DEST_DIR/project_structure.txt"

# Create or clean the destination directory
mkdir -p "$DEST_DIR"
rm -f "$DEST_DIR"/*

# Copy files, handling duplicates with path-based prefixing
declare -A seen_files

find "$SRC_DIR" -type f | while read -r FILE; do
    # Skip .svg files
    if [[ "$FILE" == *.svg ]]; then
        continue
    fi

    BASENAME=$(basename "$FILE")

    if [[ -e "$DEST_DIR/$BASENAME" ]]; then
        # Duplicate detected — add prefix based on subdirectory structure
        RELATIVE_PATH=${FILE#$SRC_DIR/}
        CLEAN_PATH=$(dirname "$RELATIVE_PATH" | tr '/' '_')
        DEST_FILENAME="${CLEAN_PATH}_${BASENAME}"
    else
        DEST_FILENAME="$BASENAME"
    fi

    cp "$FILE" "$DEST_DIR/$DEST_FILENAME"
done

# Generate the folder structure listing
echo "Directory structure of $SRC_DIR:" > "$STRUCTURE_FILE"
if command -v tree >/dev/null 2>&1; then
    tree "$SRC_DIR" >> "$STRUCTURE_FILE"
else
    find "$SRC_DIR" >> "$STRUCTURE_FILE"
fi

# Open the exports directory
explorer.exe "$(wslpath -w "$DEST_DIR")"
