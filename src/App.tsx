import { useState, useEffect } from 'react'
import { TbCurrencyReal } from 'react-icons/tb'

import Input from './components/Input'
import Result from './components/Result'

function App() {
  const [brazilianPrice, setBrazilianPrice] = useState<string | undefined>('')
  const [abroadPrice, setAbroadPrice] = useState<string | undefined>('')
  const [shippingPrice, setShippingPrice] = useState<string | undefined>('')
  const [importTax, setImportTax] = useState<string | undefined>('')
  const [icmsTax, setIcmsTax] = useState<string | undefined>('')
  const [totalImportPrice, setTotalImportPrice] = useState<string | undefined>(
    ''
  )
  const [iofTax, setIofTax] = useState<string | undefined>('')

  useEffect(() => {
    const totalPrice =
      (abroadPrice ? parseFloat(abroadPrice) : 0) +
      (shippingPrice ? parseFloat(shippingPrice) : 0)
    const newImportTax = totalPrice * 0.6
    const newIcmsTax = totalPrice * 0.17
    setImportTax(newImportTax.toFixed(2))
    setIcmsTax(newIcmsTax.toFixed(2))
    setTotalImportPrice((totalPrice + newImportTax + newIcmsTax).toFixed(2))
  }, [abroadPrice, shippingPrice])

  return (
    <div className="bg-[#121214] w-full h-screen flex justify-center place-items-center text-white">
      <div className="w-full max-w-lg">
        <form className="bg-[#252525] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
          <h1 className="p-2 text-4xl font-bold mb-10">
            Vale a pena importar ou comprar no Brasil?
          </h1>
          <div className="flex flex-col gap-y-5">
            <Input
              value={brazilianPrice}
              onChange={(e) => setBrazilianPrice(e.target.value)}
              placeholder="0,00"
              label="Preço no Brasil"
              type="number"
              icon={<TbCurrencyReal />}
            />
            <Input
              value={abroadPrice}
              onChange={(e) => setAbroadPrice(e.target.value)}
              placeholder="0,00"
              label="Valor do produto para Importar"
              type="number"
              icon={<TbCurrencyReal />}
            />
            <Input
              value={shippingPrice}
              onChange={(e) => setShippingPrice(e.target.value)}
              placeholder="0,00"
              label="Valor do Frete"
              type="number"
              icon={<TbCurrencyReal />}
            />
            <Input
              value={importTax}
              placeholder="0,00"
              label="Taxa de Importação (Federal)"
              type="number"
              child={
                <div className="w-2/12 flex justify-center place-items-center rounded-md bg-purple-950 mr-2 text-red-200">
                  60 %
                </div>
              }
              icon={<TbCurrencyReal />}
            />
            <Input
              value={icmsTax}
              placeholder="0,00"
              label="ICMS (Imposto Estadual)"
              type="number"
              child={
                <div className="w-2/12 flex justify-center place-items-center rounded-md bg-purple-950 mr-2 text-red-200">
                  17 %
                </div>
              }
              icon={<TbCurrencyReal />}
            />
            <Input
              value={totalImportPrice}
              placeholder="0,00"
              label="Total da Importação"
              type="number"
              icon={<TbCurrencyReal />}
            />
            <div className="flex items-center justify-between">
              <Result
                totalImportPrice={totalImportPrice}
                totalBrazilianPrice={brazilianPrice}
              />
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023{' '}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/renan-garcia"
            rel="noreferrer"
          >
            Renan Garcia
          </a>
          . Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}

export default App
