import { Button } from "@/components/ui/button"

const ButtonsPage = () => {
    return (
        <div className="flex flex-col space-y-2 p-4 max-w-[200px]">
            <Button variant="default"> Default</Button>
            <Button variant="primary"> Primary</Button>
            <Button variant="primaryOutline"> Primary Outline</Button>
            <Button variant="secondary"> Secondary</Button>
            <Button variant="secondaryOutline"> Secondary Outline</Button>
            <Button variant="danger"> danger</Button>
            <Button variant="dangerOutline"> danger Outline</Button>
            <Button variant="super"> super</Button>
            <Button variant="superOutline"> super Outline</Button>
            <Button variant="ghost"> ghost</Button>
            <Button variant="sidebar"> sidebar</Button>
            <Button variant="sidebarOutline"> sidebar Outline</Button>
        </div>
    )
}

export default ButtonsPage;