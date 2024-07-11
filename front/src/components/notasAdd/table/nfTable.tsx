'use client'

import React, { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  Row,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/ui/table'
import { columnsNotaFiscal, Product } from './columns'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onDelete: (row: Row<TData>) => void
  onEdit: (row: Row<TData>) => void
}

export function NFTable<TData, TValue>({
  columns,
  data,
  onDelete,
  onEdit,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

// Exemplo de uso do NFTable com dados de exemplo
const data: Product[] = [
  {
    codProduto: '001',
    descProduto: 'Produto 1',
    ncmXml: '12345678',
    origem: 'Nacional',
    cstXml: '101',
    cfop: '5102',
    um: 'UN',
    quantidade: 10,
    vlrUnit: 100,
    vlrTotal: 1000,
  },
]

export default function NFT() {
  const [products, setProducts] = useState<Product[]>(data)

  const handleDelete = (row: Row<Product>) => {
    setProducts((prev) => prev.filter((product) => product.codProduto !== row.original.codProduto))
  }

  const handleEdit = (newProduct: Product) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.codProduto === newProduct.codProduto ? newProduct : product
      )
    )
  }

  const columns = columnsNotaFiscal(handleDelete, handleEdit)

  return (
    <NFTable
      columns={columns}
      data={products}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  )
}
