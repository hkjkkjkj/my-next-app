-- Create admin_users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP NULL,
  is_active BOOLEAN DEFAULT 1,
  INDEX idx_email (email)
);

-- Insert a demo admin account
-- Email: admin@example.com
-- Password: admin123
-- Password hash generated with bcrypt (10 rounds)
INSERT INTO admin_users (email, password_hash, full_name) 
VALUES (
  'admin@example.com',
  '$2a$10$YourHashWillBeGeneratedByCode',
  'Admin User'
) ON DUPLICATE KEY UPDATE email=email;
