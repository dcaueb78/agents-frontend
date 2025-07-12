import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod/v4'
import { useCreateRoom } from '@/http/use-create-room'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const createRoomSchema = z.object({
  name: z.string().min(3, { message: 'Inclua no mínimo 3 caracteres' }),
  description: z.string(),
})

type CreateRoomFormDate = z.infer<typeof createRoomSchema>

export function CreateRoomForm() {
  const { mutateAsync: createRoom } = useCreateRoom()

  const createRoomForm = useForm<CreateRoomFormDate>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  async function handleCreateRoom({ name, description }: CreateRoomFormDate) {
    await createRoom({ name, description })
    createRoomForm.reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar sala</CardTitle>
        <CardDescription>
          Crie uma nova sala para começar a fazer perguntar e receber respostas
          da I.A.
        </CardDescription>
        <CardContent className="px-0 pt-2">
          <Form {...createRoomForm}>
            <form
              className="flex flex-col gap-4"
              onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
            >
              <FormField
                control={createRoomForm.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Nome da sala</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Digite o nome da sala..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />

              <FormField
                control={createRoomForm.control}
                name="description"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />

              <Button className="w-full" type="submit">
                Criar sala
              </Button>
            </form>
          </Form>
        </CardContent>
      </CardHeader>
    </Card>
  )
}
