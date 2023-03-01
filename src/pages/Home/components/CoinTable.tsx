import TableBody from "./TableBody"
import TableHeader from "./TableHeader"

const CoinTable = () => {
  const headers = [
    'Name',
    'Price',
    '1h %',
    '24h %',
    '7d %',
    'Market Cap',
  ];

  return (
    <div className="mx-auto h-[2100px] max-w-[1200px] overflow-auto">
      <div className="min-w-[900px]">
        <TableHeader thArray={headers} />
        <TableBody />
      </div>
    </div>
  )
}

export default CoinTable