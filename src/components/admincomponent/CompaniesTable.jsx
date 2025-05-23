 
// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../ui/table";
// import { Avatar, AvatarImage } from "../ui/avatar";
// import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
// import { Edit2, MoreHorizontal } from "lucide-react";
// import { useSelector } from "react-redux";

// const CompaniesTable = () => {
//   const { companies } = useSelector((store) => store.company);
//   console.log("COMPANIES",companies);
//   if (!companies) {
//     return <div>Loading...</div>;
//   }
  

//   return (
//     <div>
//       <Table>
//         <TableCaption>Your recent registered Companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Company Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {companies.length === 0 ? (
//             <span>No Companies Added</span>
//           ) : (
//             companies?.map((company) => (
//               <TableRow key={company.id}>
//                 <TableCell>
//                   <Avatar>
//                     <AvatarImage
//                       src={company.logo || "default-logo-url"}
//                       alt={`${company.name} logo`}
//                     />
//                   </Avatar>
//                 </TableCell>
//                 <TableCell>{company.name}</TableCell>
//                 <TableCell>{company.createdAt.split("T")[0]}</TableCell>
//                 <TableCell className="text-right cursor-pointer">
//                   <Popover>
//                     <PopoverTrigger>
//                       <MoreHorizontal />
//                     </PopoverTrigger>
//                     <PopoverContent className="w-32">
//                       <div className="flex items-center gap-2 w-fit cursor-pointer">
//                         <Edit2 className="w-4" />
//                         <span>Edit</span>
//                       </div>
//                     </PopoverContent>
//                   </Popover>
//                 </TableCell>
//               </TableRow>
//             ))
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default CompaniesTable;

