interface SideBarProps {
    selected: 'all' | 'open' | 'closed';
    onSelect: (filter: 'all' | 'open' | 'closed') => void;
}

export const SideBar = ({ selected, onSelect }: SideBarProps) => {

    const items: { label: string; value: 'all' | 'open' | 'closed' }[] = [
        { label: 'Todos los tickets', value: 'all' },
        { label: 'Abiertos', value: 'open' },
        { label: 'Cerrados', value: 'closed' },
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
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}