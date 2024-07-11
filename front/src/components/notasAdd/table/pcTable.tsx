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
import { columnsPedidoCompra as createColumns, PC } from './columns'
import { AddProduto } from './addProduto'

interface PCTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  onDelete: (row: Row<TData>) => void
  onEdit: (row: Row<TData>) => void
}

export function PCTabela<TData, TValue>({
  columns,
  data,
  onDelete,
  onEdit,
}: PCTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='flex-grow'>
      <div className='w-full rounded-md border'>
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
                <TableCell colSpan={columns.length} className=' text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

// Exemplo de uso do PCTabela com dados de exemplo
const data: PC[] = []

export default function PedidoCompra() {
  const [products, setProducts] = useState<PC[]>(data)

  const handleDelete = (row: Row<PC>) => {
    setProducts((prev) =>
      prev.filter((product) => product.cod !== row.original.cod)
    )
  }

  const handleEdit = (newProduct: PC) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.cod === newProduct.cod ? newProduct : product
      )
    )
  }

  const handleAdd = (newProduct: PC) => {
    setProducts((prev) => [...prev, newProduct])
  }

  const columns = createColumns(handleDelete, handleEdit)

  return (
    <div className='flex flex-1 justify-between'>
      <div>
        <PCTabela
          columns={columns}
          data={products}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
      <div>
        <AddProduto onSave={handleAdd} />
      </div>
    </div>
  )
}
