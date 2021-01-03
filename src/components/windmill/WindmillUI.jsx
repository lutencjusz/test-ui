import React, { useState } from 'react';
import {
  Button,
  Label,
  Select,
  Input,
  Badge,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
} from '@windmill/react-ui';
import 'tailwindcss/tailwind.css';
import { styles } from '../../constaints';

export default function WindmillUI() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="frame">
      <div style={styles.lightStyle}>
        <nav className="flex items-center justify-between px-6 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg">
          <a className="text-gray-700 dark:text-gray-400" href="#">
            <div className="w-6 h-6 text-purple-600">tekst</div>
          </a>
          <ul className="flex space-x-4">
            <li>
              <Button layout="link">Products</Button>
            </li>
            <li>
              <Button layout="link">Contact</Button>
            </li>
            <li>
              <Button>Login</Button>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between px-6 py-4 rounded-lg bg-gray-80 dark:bg-gray-800 shadow-lg space-x-4">
          <div>
            <h1>Windmill</h1>
          </div>

          <Input
            aria-label="Bad"
            placeholder="Prefer a Label"
            valid={false}
            className="mt-1"
          />
          <Label>
            <span>Requested Limit</span>
            <Select className="mt-1">
              <option>$1,000</option>
              <option>$5,000</option>
            </Select>
          </Label>
          <Button size="larger">Larger</Button>
        </div>
        <div className="space-x-4 space-y-4">
          <Badge type="success">success</Badge>
          <Badge type="danger">danger</Badge>
        </div>
        <Card colored className="bg-purple-600">
          <CardBody>
            <p className="mb-4 font-semibold text-white">Revenue</p>
            <p className="text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
              dolorum.
            </p>
          </CardBody>
        </Card>

        <div className="relative">
          <Button
            onClick={toggleDropdown}
            aria-label="Notifications"
            aria-haspopup="true"
          >
            Open dropdown
          </Button>
          <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <DropdownItem tag="a" href="#" className="justify-between">
              <span>Messages</span>
              <Badge type="danger">13</Badge>
            </DropdownItem>
            <DropdownItem onClick={() => alert('Alerts!')}>
              <span>Alerts</span>
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
