const TableHeader = ({ thArray }: HeaderProps) => {
  return (
    <div className={`grid grid-cols-${thArray.length} gap-[2px]`}>
      {thArray.map((e, index) => (
        <div
          key={'header' + index}
          className={`bg-gradient-to-t from-[#195bd6] to-[#C01DDE] px-[10px] py-[5px] rounded-[3px] text-center font-medium`}
        >
          {e}
        </div>
      ))}
    </div>
  )
}

interface HeaderProps {
  thArray: Array<string>
}

export default TableHeader