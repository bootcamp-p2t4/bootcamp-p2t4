TRUNCATE TABLE tbl_users;

INSERT INTO tbl_users
  (user_name, user_password, user_email, monthly_period, created_at, updated_at)
VALUES
  ('user', 'password', 'user@domain.com', 2, NOW(), NOW());

TRUNCATE TABLE tbl_transactions;

INSERT INTO tbl_transactions
  (user_name, monthly_period, buy_sell, ticker, shares, created_at, updated_at)
VALUES
  ('user', 1, 'buy', 'CASH', 100000, NOW(), NOW()),
  ('user', 1, 'buy', 'SP500', 2, NOW(), NOW()),
  ('user', 1, 'buy', 'DJI', 4, NOW(), NOW()),
  ('user', 1, 'buy', 'NASDAQ', 6, NOW(), NOW()),
  ('user', 1, 'buy', 'JPM', 8, NOW(), NOW()),
  ('user', 1, 'buy', 'BAC', 10, NOW(), NOW()),
  ('user', 1, 'buy', 'WFC', 12, NOW(), NOW()),
  ('user', 1, 'buy', 'AMZN', 14, NOW(), NOW()),
  ('user', 1, 'buy', 'APPL', 16, NOW(), NOW()),
  ('user', 1, 'buy', 'GOOGL', 18, NOW(), NOW()),
  ('user', 1, 'sell', 'SP500', 1, NOW(), NOW()),
  ('user', 1, 'sell', 'DJI', 2, NOW(), NOW()),
  ('user', 1, 'sell', 'NASDAQ', 3, NOW(), NOW()),
  ('user', 1, 'sell', 'JPM', 4, NOW(), NOW()),
  ('user', 1, 'sell', 'BAC', 5, NOW(), NOW()),
  ('user', 1, 'sell', 'WFC', 6, NOW(), NOW()),
  ('user', 1, 'sell', 'AMZN', 7, NOW(), NOW()),
  ('user', 1, 'sell', 'APPL', 8, NOW(), NOW()),
  ('user', 1, 'sell', 'GOOGL', 9, NOW(), NOW());

TRUNCATE TABLE tbl_positions;

INSERT INTO tbl_positions
  (user_name, monthly_period, ticker, shares, created_at, updated_at)
VALUES
  ('user', 1, 'CASH', 69119, NOW(), NOW()),
  ('user', 1, 'SP500', 1, NOW(), NOW()),
  ('user', 1, 'DJI', 2, NOW(), NOW()),
  ('user', 1, 'NASDAQ', 3, NOW(), NOW()),
  ('user', 1, 'JPM', 4, NOW(), NOW()),
  ('user', 1, 'BAC', 5, NOW(), NOW()),
  ('user', 1, 'WFC', 6, NOW(), NOW()),
  ('user', 1, 'AMZN', 7, NOW(), NOW()),
  ('user', 1, 'APPL', 8, NOW(), NOW()),
  ('user', 1, 'GOOGL', 9, NOW(), NOW());
