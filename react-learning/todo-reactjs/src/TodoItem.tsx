import { Trash } from "lucide-react";

type Priority = "Urgente" | "Moyenne" | "Basse"

// Données nécessaires à l'affichage d'une tâche.
type Todo = {
  id: number;
  text: string;
  priority: Priority
}

type Props = {
    todo: Todo
    onDelete: () => void
    isSelected: boolean
    onToggleSelect:(id:number) => void
}

// Affiche une tâche et transmet au parent les actions de sélection et de suppression.
const TodoItem = ({todo, onDelete, isSelected, onToggleSelect }: Props) => {
    return (
       <li className="p-3">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {/* La case reflète l'état détenu par App et signale tout changement. */}
                    <input type="checkbox" checked = {isSelected} className="checkbox checkbox-primary checkbox-sm" onChange={() => onToggleSelect(todo.id)} />
                    <span className="text-md font-bold">
                        <span>{todo.text}</span>
                    </span>
                    {/* La couleur du badge dépend du niveau de priorité. */}
                    <span className= {`badge badge-sm badge-soft ${todo.priority === "Urgente" ? "badge-error": todo.priority ==="Moyenne" ? "badge-warning" : "badge-success"}`}>
                        {todo.priority}
                    </span>
                </div>
                {/* La suppression est exécutée par le composant parent. */}
                <button className="btn btn-sm btn-error btn-soft" onClick={onDelete}>
                    <Trash className="w-4 h-4"/>
                </button>
            </div>
       </li>
    )
}

export default TodoItem