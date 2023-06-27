interface ResultProps {
  totalImportPrice?: string
  totalBrazilianPrice?: string
}

function Result({ totalImportPrice, totalBrazilianPrice }: ResultProps) {
  const importPrice = parseFloat(totalImportPrice || '0')
  const brazilianPrice = parseFloat(totalBrazilianPrice || '0')
  const result = ''

  if (importPrice === 0 || brazilianPrice === 0) {
    return (
      <div className="w-full flex justify-center place-content-center bg-gray-500 p-5 text-xl">
        Preencha os campos
      </div>
    )
  }

  if (importPrice > brazilianPrice) {
    return (
      <div className="w-full flex justify-center place-content-center bg-red-500 p-5 text-xl">
        Compre no Brasil
      </div>
    )
  }

  if (importPrice < brazilianPrice) {
    return (
      <div className="w-full flex justify-center place-content-center bg-green-500 p-5 text-xl">
        Faça a importação
      </div>
    )
  }
}

export default Result
