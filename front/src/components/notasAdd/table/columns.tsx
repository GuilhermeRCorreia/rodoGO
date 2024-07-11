import { Column, ColumnDef, Row } from '@tanstack/react-table'
import { Button } from 'components/ui/button'
import { EditProduto } from './editProduto'
import { cn } from 'src/lib/utils'

interface DataTableRowActionsProps {
  row: Row<any>
  onDelete: (row: Row<any>) => void
  onEdit: (row: Row<any>) => void
}

const DataTableRowActions = ({ row, onDelete, onEdit }: DataTableRowActionsProps) => {
  return (
    <div className="flex space-x-2">
      <EditProduto onSave={(updatedProduct) => onEdit({ ...row.original, ...updatedProduct })} productToEdit={row.original} />
      <Button onClick={() => onDelete(row)} variant="outline" size="sm">Delete</Button>
    </div>
  )
}

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>
  title: string
  className?: string
}

const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <span>{title}</span>
    </div>
  )
}

// Definindo o tipo de dados com todas as propriedades mencionadas
export type NF = {
  codProduto: string
  descProduto: string
  ncmXml: string
  origem: string
  cstXml: string
  cfop: string
  um: string
  quantidade: number
  vlrUnit: number
  vlrTotal: number
}
export type PC = {
  produto: string
  cod: string
  origemProd: string
  umProtheus: string
  ncm: string
}

export function sumColumnValues(data: NF[]): number {
  return data.reduce((sum, item) => sum + item.vlrTotal, 0)
}

// Configurando as colunas para a tabela de Nota Fiscal
export const columnsNotaFiscal = (onDelete: (row: Row<NF>) => void, onEdit: (row: Row<NF>) => void): ColumnDef<NF>[] => [
  { accessorKey: 'codProduto', header: ({ column }) => <DataTableColumnHeader column={column} title="Cod Produto" /> },
  { accessorKey: 'descProduto', header: ({ column }) => <DataTableColumnHeader column={column} title="Desc Produto" /> },
  { accessorKey: 'ncmXml', header: ({ column }) => <DataTableColumnHeader column={column} title="Ncm XML" /> },
  { accessorKey: 'origem', header: ({ column }) => <DataTableColumnHeader column={column} title="Origem" /> },
  { accessorKey: 'cstXml', header: ({ column }) => <DataTableColumnHeader column={column} title="CST Xml" /> },
  { accessorKey: 'cfop', header: ({ column }) => <DataTableColumnHeader column={column} title="CFOP" /> },
  { accessorKey: 'um', header: ({ column }) => <DataTableColumnHeader column={column} title="UM" /> },
  { accessorKey: 'quantidade', header: ({ column }) => <DataTableColumnHeader column={column} title="Quantidade" /> },
  { accessorKey: 'vlrUnit', header: ({ column }) => <DataTableColumnHeader column={column} title="Vlr. Unit" /> },
  { accessorKey: 'vlrTotal', header: ({ column }) => <DataTableColumnHeader column={column} title="Vlr. Total" /> },
]

// Configurando as colunas para a tabela de Pedido de Compra
export const columnsPedidoCompra = (onDelete: (row: Row<PC>) => void, onEdit: (row: Row<PC>) => void): ColumnDef<PC>[] => [
  { accessorKey: 'produto', header: ({ column }) => <DataTableColumnHeader column={column} title="Produto" /> },
  { accessorKey: 'cod', header: ({ column }) => <DataTableColumnHeader column={column} title="Cod" /> },
  { accessorKey: 'origemProd', header: ({ column }) => <DataTableColumnHeader column={column} title="Origem Prod" /> },
  { accessorKey: 'umProtheus', header: ({ column }) => <DataTableColumnHeader column={column} title="UM Protheus" /> },
  { accessorKey: 'ncm', header: ({ column }) => <DataTableColumnHeader column={column} title="NCM" /> },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <DataTableRowActions row={row} onDelete={onDelete} onEdit={onEdit} />,
  },
]
