-- Auto-generated SQL to add default system requirements
-- This will update ALL games with complete system requirements

UPDATE games SET specs_json = CAST('{"minimum": {"os": "Windows 10/11", "cpu": "Intel Core i5-6600K or AMD Ryzen 5 1600", "memory": "8 GB RAM", "gpu": "NVIDIA GeForce GTX 1060 or AMD Radeon RX 580", "storage": "50 GB available space"}, "recommended": {"os": "Windows 10/11", "cpu": "Intel Core i7-8700K or AMD Ryzen 7 2700X", "memory": "16 GB RAM", "gpu": "NVIDIA GeForce RTX 2070 or AMD Radeon RX 5700 XT", "storage": "50 GB available space"}}' AS JSON);