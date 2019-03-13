USE stock_novice_db;

TRUNCATE TABLE tbl_users;

INSERT INTO tbl_users
  (user_name, monthly_period, created_at, updated_at)
VALUES
  ('test_user', 2, NOW(), NOW());

TRUNCATE TABLE tbl_transactions;

INSERT INTO tbl_transactions
  (user_name, monthly_period, buy_sell, stock, ticker, shares, created_at, updated_at)
VALUES
  ('test_user', 1, 'buy', 'Cash', 'CASH', 100000, NOW(), NOW()),
  ('test_user', 1, 'buy', 'S&P 500', 'SP500', 2, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Dow Jones Ind Avg', 'DJI', 4, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Nasdaq', 'NASDAQ', 6, NOW(), NOW()),
  ('test_user', 1, 'buy', 'JP Morgan Chase', 'JPM', 8, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Bank of America', 'BAC', 10, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Wells Fargo Co', 'WFC', 12, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Amazon', 'AMZN', 14, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Apple', 'APPL', 16, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Google', 'GOOGL', 18, NOW(), NOW()),
  ('test_user', 1, 'sell', 'S&P 500', 'SP500', 1, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Dow Jones Ind Avg', 'DJI', 2, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Nasdaq', 'NASDAQ', 3, NOW(), NOW()),
  ('test_user', 1, 'sell', 'JP Morgan Chase', 'JPM', 4, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Bank of America', 'BAC', 5, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Wells Fargo Co', 'WFC', 6, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Amazon', 'AMZN', 7, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Apple', 'APPL', 8, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Google', 'GOOGL', 9, NOW(), NOW());
