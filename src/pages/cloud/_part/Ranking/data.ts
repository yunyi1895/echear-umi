interface DataOpt {
  order: number;
  stock_code: string;
  stock_name: string;
  market_capitalization: number;
}

var data: DataOpt[] = [
  {
    order: 1,
    stock_code: '601398',
    stock_name: '工商银行',
    market_capitalization: 14451.21,
  },
  {
    order: 2,
    stock_code: '601857',
    stock_name: '中国石油',
    market_capitalization: 13148.07,
  },
  {
    order: 3,
    stock_code: '601288',
    stock_name: '农业银行',
    market_capitalization: 11620.49,
  },
  {
    order: 4,
    stock_code: '601988',
    stock_name: '中国银行',
    market_capitalization: 7608.64,
  },
  {
    order: 5,
    stock_code: '601318',
    stock_name: '中国平安',
    market_capitalization: 7004.4,
  },
  {
    order: 6,
    stock_code: '600519',
    stock_name: '贵州茅台',
    market_capitalization: 6934.21,
  },
  {
    order: 7,
    stock_code: '600028',
    stock_name: '中国石化',
    market_capitalization: 5905.48,
  },
  {
    order: 8,
    stock_code: '600036',
    stock_name: '招商银行',
    market_capitalization: 5891.63,
  },
  {
    order: 9,
    stock_code: '601628',
    stock_name: '中国人寿',
    market_capitalization: 4583.26,
  },
  {
    order: 10,
    stock_code: '601088',
    stock_name: '中国神华',
    market_capitalization: 3298.21,
  },
];

export default data;
