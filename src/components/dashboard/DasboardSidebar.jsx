import { auth } from "@/lib/auth";
import {
    Bars,
    Bell,
    Envelope,
    Gear,
    House,
    Magnifier,
    Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { ChartArea, Heart, User2, User, Plus, BookOpenText } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { BiMoney } from "react-icons/bi";
import { TbAsset } from "react-icons/tb";

export default async function DashboardSidebar() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    const role = user?.role || "lesson-student";
    // console.log(user);
    const daashboardItems = {
        "lesson-student": [
            { icon: ChartArea, label: "Home", link: "/dashboard/lesson-student" },
            { icon: Heart, label: "Favorite", link: "/dashboard/lesson-student/my-favorites" },
            {
                icon: User,
                label: "Profile",
                link: "/dashboard/lesson-student/profile",
            },
        ],

        "lesson-creator": [
            { icon: ChartArea, label: "Home", link: "/dashboard/lesson-creator" },
            { icon: Plus, label: "Add Lesson", link: "/dashboard/lesson-creator/add-idea" },
            {
                icon: BookOpenText,
                label: "My Lessons",
                link: "/dashboard/lesson-creator/my-ideas",
            },
            {
                icon: Heart,
                label: "My Favorites",
                link: "/dashboard/lesson-creator/my-favorites",
            },
            {
                icon: User,
                label: "Profile",
                link: "/dashboard/lesson-creator/profile",
            },
        ],

        admin: [
            { icon: ChartArea, label: "Overview", link: "/dashboard/admin" },
            { icon: User2, label: "User Manage", link: "/dashboard/admin/users" },
            {
                icon: BiMoney,
                label: "Transaction",
                link: "/dashboard/admin/transaction",
            },
        ],
    };

    const navItems = daashboardItems[role];
    // console.log(navItems, role, "user role, nav items");

    //   console.log(navItems)
    // //   const navItems = [
    // //     { icon: House, label: "Home" },
    // //     { icon: Magnifier, label: "Search" },
    // //     { icon: Bell, label: "Notifications" },
    // //     { icon: Envelope, label: "Messages" },
    // //     { icon: Person, label: "Profile" },
    // //     { icon: Gear, label: "Settings" },
    // //   ];

    return (
        <Drawer>
            <Button className={"hidden "} variant="secondary">
                <Bars />
                Menu
            </Button>

            <nav className="flex flex-col gap-1 w-[200px] border border-right-1">
                <div className="border-b  py-3">
                    <Image
                        src={"/logo-xl.png"}
                        height={"100"}
                        width={"100"}
                        className="h-10 w-full object-cover"
                        alt=""
                    />
                </div>

                {navItems?.map((item) => (
                    <Link key={item.label} href={item.link}>
                        <button
                            key={item.label}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                            type="button"
                        >
                            <item.icon className="size-5 text-muted" />
                            {item.label}
                        </button>
                    </Link>
                ))}
            </nav>

            <Drawer.Backdrop>
                <Drawer.Content placement="left">
                    <Drawer.Dialog>
                        <Drawer.CloseTrigger />
                        <Drawer.Header>
                            <Drawer.Heading>Navigation</Drawer.Heading>
                        </Drawer.Header>
                        <Drawer.Body>
                            <nav className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <Link key={item.label} href={item.link}>
                                        <button
                                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                                            type="button"
                                        >
                                            <item.icon className="size-5 text-muted" />
                                            {item.label}
                                        </button>
                                    </Link>
                                ))}
                            </nav>
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer.Backdrop>
        </Drawer>
    );
}