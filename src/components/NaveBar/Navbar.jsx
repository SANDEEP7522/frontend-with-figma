import { FaBell, FaChevronDown } from 'react-icons/fa';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
      {/* Left Section: Go Esc */}
      <Button variant="outline" className="flex items-center">
        <span className="mr-2">&lt; Go Esc</span>
      </Button>

      {/* Center Section: Search/Input Box */}
      <div className="flex-1 mx-4">
        <Input placeholder="Search..." className="w-full" />
      </div>

      {/* Right Section: Notifications and Dropdown */}
      <div className="flex items-center">
        <FaBell className="mr-4" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center">
              <span className="mr-2">TESTING</span>
              <FaChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
export default Navbar;

