USE stock_novice_db;

/*
TRUNCATE TABLE tbl_users;
*/

INSERT INTO tbl_users
  (user_name, monthly_period, created_at, updated_at)
VALUES
  ('test_user', 2, NOW(), NOW());

TRUNCATE TABLE tbl_transactions;

INSERT INTO tbl_transactions
  (user_name, monthly_period, buy_sell, stock, ticker, shares, price, cash, created_at, updated_at)
VALUES
  /*
  ('test_user', 1, 'buy', 'Cash', 'CASH', 100000, NOW(), NOW()),
  */
  ('test_user', 1, 'buy', 'S&P 500', 'SP500', 2, 1386, 2772, NOW(), NOW()),
  ('test_user', 1, 'sell', 'S&P 500', 'SP500', -1, 1386, -1386, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Dow Jones Ind Avg', 'DJI', 4, 12818, 51272, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Dow Jones Ind Avg', 'DJI', -2, 12818, -25636, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Nasdaq', 'NASDAQ', 6, 36, 216, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Nasdaq', 'NASDAQ', -3, 36, -108, NOW(), NOW()),
  ('test_user', 1, 'buy', 'JP Morgan Chase', 'JPM', 8, 48, 384, NOW(), NOW()),
  ('test_user', 1, 'sell', 'JP Morgan Chase', 'JPM', -4, 48, -192, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Bank of America', 'BAC', 10, 38, 380, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Bank of America', 'BAC', -5, 38, -190, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Wells Fargo Co', 'WFC', 12, 30, 360, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Wells Fargo Co', 'WFC', -6, 30, -180, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Amazon', 'AMZN', 14, 78, 1092, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Amazon', 'AMZN', -7, 78, -546, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Apple', 'APPL', 16, 25, 400, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Apple', 'APPL', -8, 25, -200, NOW(), NOW()),
  ('test_user', 1, 'buy', 'Alphabet (Google)', 'GOOGL', 18, 289, 5202, NOW(), NOW()),
  ('test_user', 1, 'sell', 'Alphabet (Google)', 'GOOGL', -9, 289, -2601, NOW(), NOW());
