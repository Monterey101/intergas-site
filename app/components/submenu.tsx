import { Link } from "./link";
import { NavLink } from "./navbar"

type SubmenuProps = {
  activeMenu: string;
  links?: NavLink[];
};

export const Submenu = ({ activeMenu, links }: SubmenuProps) => {

    // Find the active menu object
    const activeItem = links?.find((item) => item.name === activeMenu);

    // Safety check
    if (!activeItem || !activeItem.sublinks) return null;

    return (
        <div className="grid grid-cols-3 gap-20 p-10 text-xl">
            <div className="text-base text-gray-500">
                <div className="text-sm text-gray-500/0">{activeItem.name.toUpperCase()}< br />< br /></div>
                {activeItem.description}
            </div>
            <div>
                <div className="text-sm text-gray-500 font-semibold">{activeItem.name.toUpperCase()}< br />< br /></div>
                {Object.entries(activeItem.sublinks).map(([title, href]) => (
          <Link key={title} title={title} link={href} />
        ))}
            </div>
            <input></input>
        </div>
    )
}