import { Input } from 'components/ui/input'
import { Button } from 'components/ui/button'
import { Textarea } from 'components/ui/textarea'
import { Combobox } from 'components/ui/combobox'
import { Anexos } from './anexos'
import {
  labels,
  statuses,
  priorities,
  filiais,
  payment,
  fornecedores,
} from 'src/data/filters'
import { DatePicker } from './date'
import { Divider } from 'components/ui/divider'
import { Layout } from 'components/layout'

const InputFields = () => {
  const handleValueChange = (value: string) => {
    console.log('Selected value:', value)
  }
  return (
    <Layout.Body>
      <div className='mb-24 flex items-center justify-between'>
        <div className='flex gap-4'>
          <Input
            type='search'
            placeholder='Chave XML'
            className='h-12 text-lg md:w-[300px] lg:w-[700px]'
          />
          <Anexos />
          <Button variant='ghost' className='h-13 text-lg ring-1 text-orange-600 ring-orange-800 hover:bg-orange-800 hover:text-white'>
            Rateio
          </Button>
        </div>
        <div className='flex gap-2'>
          <Button variant='ghost' className='h-13 text-lg ring-1 text-red-600 ring-red-800 hover:bg-red-800 hover:text-white'>
            Cancelar
          </Button>
          <Button variant='ghost' className='h-13 text-lg ring-1 text-emerald-600 ring-emerald-800 hover:bg-emerald-800 hover:text-white'>Salvar</Button>
        </div>
      </div>
      <div className='flex flex-col gap-5 '>
        <div className='h-15 flex gap-5'>
          <Combobox
            options={filiais}
            placeholder='Selecionar Filial...'
            searchPlaceholder='Selecionar Filial...'
            noResultsText='Nenhuma Filial encontrado.'
            onValueChange={handleValueChange}
            className='w-64'
          />
          <Combobox
            options={fornecedores}
            placeholder='Selecionar Fornecedor...'
            searchPlaceholder='Selecionar Fornecedor...'
            noResultsText='Nenhum Fornecedor encontrado.'
            onValueChange={handleValueChange}
            className='flex-1'
          />
          <div className='flex gap-1 border-none'>
            <Input
              type='text'
              placeholder='Nota'
              className='h-15 w-64 border-l-2 text-lg'
            />
            <Input
              type='text'
              placeholder='Serie'
              className='h-15 w-24 border-r-2 text-lg'
            />
          </div>
          <DatePicker className=' h-15' />
        </div>
        <div className='flex gap-5'>
          <Combobox
            options={labels}
            placeholder='Selecionar Tipo...'
            searchPlaceholder='Selecionar Tipo...'
            noResultsText='Nenhum tipo encontrado.'
            onValueChange={handleValueChange}
            className='h-15 w-64'
          />
          <Combobox
            options={statuses}
            placeholder='Selecionar Status...'
            searchPlaceholder='Selecionar Status...'
            noResultsText='Nenhum status encontrado.'
            onValueChange={handleValueChange}
            className='h-15 w-64'
          />
          <Combobox
            options={priorities}
            placeholder='Selecionar Prioridade...'
            searchPlaceholder='Selecionar Prioridade...'
            noResultsText='Nenhum Prioridade encontrado.'
            onValueChange={handleValueChange}
            className='h-15 w-64'
          />
          <Combobox
            options={payment}
            placeholder='Selecionar Pagamento...'
            searchPlaceholder='Selecionar Pagamento...'
            noResultsText='Nenhum Método de pagamento encontrado.'
            onValueChange={handleValueChange}
            className='h-15 w-64'
          />
          <Textarea placeholder='Adicione Observações aqui' className='' />
        </div>
      </div>
      <div className='-mx-4 flex-1 overflow-x-auto  px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'></div>
      <div>
        <Divider className='my-4 px-40 ' text='Itens' />
      </div>
    </Layout.Body>
  )
}

export default InputFields
