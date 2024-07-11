'use client'
import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from 'components/ui/sheet'

export function Anexos() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='h-13 text-lg text-cyan-600 ring-1 ring-cyan-800 hover:bg-cyan-800 hover:text-white'
        >
          Anexos
        </Button>
      </SheetTrigger>
      <SheetContent side='top'>
        <div className=''>
          <div className=''>
            <SheetHeader className=''>
              <SheetTitle className='text-4xl'>Adicionar Anexos</SheetTitle>
            </SheetHeader>
            <div>
              <div className='flex items-center gap-4 py-4'>
                <Input id='anexo' type='file' className='max-w-3xl h-20 text-xl' />
                <Input type='Descrição' placeholder='Descrição' className='h-20 text-xl flex-1' />
              </div>
              <div className='flex items-center gap-4 py-4'>
                <Input id='anexo' type='file' className='max-w-3xl h-20 text-xl' />
                <Input type='Descrição' placeholder='Descrição' className='h-20 text-xl flex-1' />
              </div>
              <div className='flex items-center gap-4 py-4'>
                <Input id='anexo' type='file' className='max-w-3xl h-20 text-xl' />
                <Input type='Descrição' placeholder='Descrição' className='h-20 text-xl flex-1' />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type='submit'>Salvar alterações</Button>
              </SheetClose>
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
