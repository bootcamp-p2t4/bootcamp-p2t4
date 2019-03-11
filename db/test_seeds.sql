USE stock_novice_db;

TRUNCATE TABLE tbl_users;

INSERT INTO tbl_users
  (user_name, monthly_period, created_at, updated_at)
VALUES
  ('user_01', 2, NOW(), NOW());

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
  (user_name, monthly_period, stock, ticker, shares, created_at, updated_at)
VALUES
  ('user', 1, 'Cash', 'CASH', 69119, NOW(), NOW()),
  ('user', 1, 'S&P 500', 'SP500', 1, NOW(), NOW()),
  ('user', 1, 'Dow Jones Ind Avg', 'DJI', 2, NOW(), NOW()),
  ('user', 1, 'Nasdaq', 'NASDAQ', 3, NOW(), NOW()),
  ('user', 1, 'JP Morgan Chase', 'JPM', 4, NOW(), NOW()),
  ('user', 1, 'Bank of America', 'BAC', 5, NOW(), NOW()),
  ('user', 1, 'Wells Fargo Co', 'WFC', 6, NOW(), NOW()),
  ('user', 1, 'Amazon', 'AMZN', 7, NOW(), NOW()),
  ('user', 1, 'Apple', 'APPL', 8, NOW(), NOW()),
  ('user', 1, 'Google', 'GOOGL', 9, NOW(), NOW());
