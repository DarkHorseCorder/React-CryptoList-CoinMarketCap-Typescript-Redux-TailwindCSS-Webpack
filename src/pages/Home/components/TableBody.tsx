import TableRow from "./TableRow"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../../../app/store"
import { getInitialData, setLoading } from "../../../slices/dataSlice"

const TableBody = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, searchQuery, isLoading } = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getInitialData())
  }, [dispatch])

  return (
    <div>
      {isLoading &&
        <div className="flex justify-center items-center py-5">
          <svg className="animate-spin -ml-1 mr-3 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      }
      {!isLoading && data.length === 0 &&
        <div className='flex flex-col items-center justify-center text-white font-bold'>
          <p className='text-[64px]'>{`(>__<)`}</p>
          <p className='text-3xl'>Ooops, No data To Display</p>
        </div>
      }
      {data && data.filter((e) => e.name.toLowerCase().includes(searchQuery.toLowerCase())).map((row: RowProps, index: number) =>
        <TableRow data={{
          index: index + 1,
          id: row.id,
          name: row.name,
          symbol: row.symbol,
          price: row.quote.USD.price,
          percent_change_1h: row.quote.USD.percent_change_1h,
          percent_change_24h: row.quote.USD.percent_change_24h,
          percent_change_7d: row.quote.USD.percent_change_7d,
          market_cap: row.quote.USD.market_cap
        }} key={`row-${index}`} />
      )}
    </div>
  )
}

interface RowProps {
  id: number
  name: string
  slug: string
  symbol: string
  quote: {
    USD: {
      price: number
      percent_change_1h: number
      percent_change_24h: number
      percent_change_7d: number
      market_cap: number
    }
  }
}

export default TableBody