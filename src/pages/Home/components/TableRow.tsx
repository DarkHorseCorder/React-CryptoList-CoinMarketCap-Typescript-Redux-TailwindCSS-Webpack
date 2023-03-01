const TableRow = ({ data }: RowProps) => {
  const { index, id, name, symbol, price, percent_change_1h, percent_change_24h, percent_change_7d, market_cap } = data
  return (
    <div
      key={'row' + index}
      className={`grid grid-cols-6 text-center'}`}
    >
      <Cell addClass='flex items-center gap-2 pl-[10%]'>
        <span className="min-w-[30px]">{index}</span>
        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`} width={32} height={32} alt={symbol} />
        <span >{name}</span>
      </Cell>
      <Cell addClass="text-right pr-10">$ {Number(price.toFixed(2)).toLocaleString('en', { minimumFractionDigits: 2 })}</Cell>
      <Cell addClass="text-center">{percent_change_1h >= 0 && '+'}{Number(percent_change_1h.toFixed(2)).toLocaleString('en', { minimumFractionDigits: 2 })}%</Cell>
      <Cell addClass="text-center">{percent_change_24h >= 0 && '+'}{Number(percent_change_24h.toFixed(2)).toLocaleString('en', { minimumFractionDigits: 2 })}%</Cell>
      <Cell addClass="text-center">{percent_change_7d >= 0 && '+'}{Number(percent_change_7d.toFixed(2)).toLocaleString('en', { minimumFractionDigits: 2 })}%</Cell>
      <Cell addClass="text-center">$ {Number(Math.round(market_cap)).toLocaleString('en')}</Cell>
    </div>
  )
}

export const Cell = ({ children, addClass }: CellProps) => {
  return <span className={`py-2 ${addClass ?? ''}`}>{children}</span>;
};

interface RowProps {
  data: {
    index: number
    id: number
    name: string
    symbol: string
    price: number
    percent_change_1h: number
    percent_change_24h: number
    percent_change_7d: number
    market_cap: number
  }
}

interface CellProps {
  children?: any
  addClass?: string
}

export default TableRow