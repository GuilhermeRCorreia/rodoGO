/**O código define e valida a estrutura de um objeto de tarefa usando zod, proporcionando uma maneira segura e tipada
 *  de garantir que os dados estejam no formato correto. Isso é especialmente útil para validação de entrada de dados
 * e consistência de tipos no desenvolvimento com TypeScript. */

import { z } from 'zod'

// Definimos um esquema de dados simples, não relacional.
// Na vida real (IRL), você terá um esquema para seus modelos de dados.
export const taskSchema = z.object({
  id: z.string(), // ID da tarefa, deve ser uma string
  filial: z.string(), // Filial, deve ser uma string
  serie: z.string(), // Série, deve ser uma string
  fornecedor: z.string(), // Fornecedor, deve ser uma string
  vencimento: z.string(), // Data de Vencimento do Boleto, deve ser uma string
  emissao: z.string(), // Data de emissão, deve ser uma string
  inclusao: z.string(), // Data de inclusão, deve ser uma string
  valor: z.string(), // Valor, deve ser uma string
  user: z.string(), // Usuário responsável, deve ser uma string
  obs: z.string(), // Observações, deve ser uma string
  status: z.string(), // Status da tarefa, deve ser uma string
  label: z.string(), // Rótulo, deve ser uma string
  prioridade: z.string(), // Prioridade, deve ser uma string
})

// Utiliza o tipo inferido do esquema taskSchema para definir o tipo Task
export type Task = z.infer<typeof taskSchema>
