import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Book } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "@/http/api";
import { Button } from "@/components/ui/button";
import { CirclePlus, CloudDownload, Copy, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router";

function BooksPage() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["books"],
        queryFn: getAllBooks,
    });

    const booksData = data?.data.books || [];

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error?.message || "Failed to load books."}</p>;

    return (
        isLoading ? <p>Loading....</p> :
            <div className="px-5">
                <div className="w-full">
                    <Link to={'/admin/dashboard/create-book'} className="float-end">
                        <Button><CirclePlus size={20} />Add Book</Button></Link>
                </div>
                <Table>
                    <TableCaption>A list of your recent books.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Genre</TableHead>
                            <TableHead>Cover Image</TableHead>
                            <TableHead>PDF File</TableHead>
                            <TableHead>Date & Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {booksData.map((book: Book) => (
                            <TableRow key={book._id}>
                                <TableCell className="font-medium">
                                    <Checkbox
                                        checked
                                        aria-label="Select row"
                                    />
                                </TableCell>
                                <TableCell className="font-medium">{book.title}</TableCell>
                                <TableCell>{book.author.name}</TableCell>
                                <TableCell>{book.genre}</TableCell>
                                <TableCell>
                                    <img
                                        src={book.coverImage}
                                        alt={book.title}
                                        className="h-12 w-12 object-cover"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" onClick={() => window.open(book.pdfFile, "_blank")}>
                                        View PDF
                                        <CloudDownload />
                                    </Button>
                                </TableCell>
                                <TableCell>{new Date(book.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-zinc-200 px-4">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(book._id)}>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Copy ID</span>
                                                    <Copy />
                                                </Button>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>Edit Book</DropdownMenuItem>
                                            <DropdownMenuItem>Delete Book</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={5}>Total</TableCell>
                            <TableCell>$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
    );
}

export default BooksPage;
