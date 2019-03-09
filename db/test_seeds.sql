TRUNCATE TABLE tbl_users;

INSERT INTO tbl_users
  (user_name, user_password, user_email, monthly_period)
VALUES
  ('user', 'password', 'user@domain.com', 1);

TRUNCATE TABLE tbl_transactions;

INSERT INTO tbl_transactions
  (user_name, buy_sell, number_shares, stock_ticker, monthly_period)
VALUES
  ('user', 'buy', 100000, 'CASH', 1),
  ('user', 'buy', 1, 'SP500', 1),
  ('user', 'buy', 2, 'DJI', 2),
  ('user', 'buy', 3, 'NASDAQ', 3),
  ('user', 'buy', 4, 'JPM', 4),
  ('user', 'buy', 5, 'BAC', 5),
  ('user', 'buy', 6, 'WF', 6),
  ('user', 'buy', 7, 'AMZN', 7),
  ('user', 'buy', 8, 'APPL', 8),
  ('user', 'buy', 9, 'GOOGL', 9),
  ('user', 'sell', 1, 'SP500', 10),
  ('user', 'sell', 2, 'DJI', 10),
  ('user', 'sell', 3, 'NASDAQ', 10),
  ('user', 'sell', 4, 'JPM', 10),
  ('user', 'sell', 5, 'BAC', 10),
  ('user', 'sell', 6, 'WF', 10),
  ('user', 'sell', 7, 'AMZN', 10),
  ('user', 'sell', 8, 'APPL', 10),
  ('user', 'sell', 9, 'GOOGL', 10);

TRUNCATE TABLE tbl_positions;

INSERT INTO tbl_positions
  (user_name, stock_ticker, number_shares)
VALUES
  ('user', 'CASH', 100000),
  ('user', 'SP500', 1),
  ('user', 'DJI', 2),
  ('user', 'NASDAQ', 3),
  ('user', 'JPM', 4),
  ('user', 'BAC', 5),
  ('user', 'WF', 6),
  ('user', 'AMZN', 7),
  ('user', 'APPL', 8),
  ('user', 'GOOGL', 9);
