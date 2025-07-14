import { useSelector } from "react-redux";
import type { Ticket } from "../../core/types/ticket";
import type { RootState } from "../../core/redux/store";

interface SideBarProps {
    selected: 'all' | 'open' | 'closed';
    onSelect: (filter: 'all' | 'open' | 'closed') => void;
}

export const SideBar = ({ selected, onSelect }: SideBarProps) => {

    const openCount = useSelector(
        (state: RootState) => state.tickets.tickets.filter((t: Ticket) => t.status === 'open').length
    );

    const closedCount = useSelector(
        (state: RootState) => state.tickets.tickets.filter((t: Ticket) => t.status === 'closed').length
    );

    const items: { label: string; value: 'all' | 'open' | 'closed', count?: number }[] = [
        { label: 'Todos los tickets', value: 'all' },
        { label: 'Abiertos', value: 'open', count: openCount },
        { label: 'Cerrados', value: 'closed', count: closedCount },
    ];
    return (
        <aside className="w-1/8 h-full bg-gray-900 rounded text-white ">
            <nav className="flex h-full flex-col items-center justify-center p-3">
                <ul>
                    {items.map(item => (
                        <li
                            key={item.value}
                            className={`p-4 mb-2 rounded cursor-pointer hover:bg-gray-700 ${selected === item.value ? 'bg-gray-800 font-bold' : ''}`}
                            onClick={() => onSelect(item.value)}
                        >
                            <span>{item.label}</span>
                            {item.count !== undefined && (
                                <span className={`${item.value === 'open' ? 'bg-green-600' : 'bg-red-600'} text-white font-bold text-xs px-2 py-1 rounded ml-4`}>
                                    {item.count}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}