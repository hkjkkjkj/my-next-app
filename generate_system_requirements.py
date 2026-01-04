import json

# Default system requirements template
DEFAULT_SPECS = {
    "minimum": {
        "os": "Windows 10/11",
        "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600",
        "memory": "8 GB RAM",
        "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580",
        "storage": "50 GB available space"
    },
    "recommended": {
        "os": "Windows 10/11",
        "cpu": "Intel Core i7-8700K or AMD Ryzen 7 2700X",
        "memory": "16 GB RAM",
        "gpu": "NVIDIA GeForce RTX 2070 or AMD Radeon RX 5700 XT",
        "storage": "50 GB available space"
    }
}

# Output file
OUTPUT_SQL = r"c:\Users\pykeo\my-next-app\update_system_requirements.sql"

def generate_sql():
    """Generate SQL to update all games with default system requirements"""
    sql_lines = []
    sql_lines.append("-- Auto-generated SQL to add default system requirements")
    sql_lines.append("-- This will update ALL games with complete system requirements\n")
    
    # Convert to JSON string
    specs_json = json.dumps(DEFAULT_SPECS)
    
    # Escape backslashes first, then single quotes for MySQL
    specs_json_escaped = specs_json.replace("\\", "\\\\").replace("'", "\\'")
    
    # Update ALL games with complete specs_json (remove WHERE clause to update all)
    sql_lines.append(f"UPDATE games SET specs_json = CAST('{specs_json_escaped}' AS JSON);")
    
    return '\n'.join(sql_lines)

# Generate SQL
print("Generating SQL for system requirements...")
sql_output = generate_sql()

# Write to file
with open(OUTPUT_SQL, 'w', encoding='utf-8') as f:
    f.write(sql_output)

print(f"\nSQL file generated: {OUTPUT_SQL}")
print("\nDefault System Requirements:")
print(json.dumps(DEFAULT_SPECS, indent=2))
print("\n✅ Import this file in phpMyAdmin to add system requirements for all games!")
