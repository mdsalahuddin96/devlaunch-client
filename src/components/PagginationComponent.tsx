"use client";

import { Pagination } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalTasks: number;
};

type PageItem = number | "ellipsis";

export function PaginationComponent({
  currentPage,
  totalPages,
  totalTasks,
}: PaginationProps) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // CHANGE: Removed local state `useState` to rely 100% on props from parent container

  const getPageNumbers = (): PageItem[] => {
    const pages: PageItem[] = [];

    pages.push(1);

    if (currentPage > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("ellipsis");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  // CHANGE: Moved navigation processor directly into the action callback function
  const handlePageChange = (targetPage: number) => {
    if (targetPage < 1 || targetPage > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", targetPage.toString());
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="w-full mt-5 max-w-2xs overflow-x-auto sm:max-w-full">
      <Pagination className="justify-end">
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous
              className="text-white"
              isDisabled={currentPage === 1}
              onPress={() => handlePageChange(currentPage - 1)}
            >
              <Pagination.PreviousIcon />
              <span>Previous</span>
            </Pagination.Previous>
          </Pagination.Item>

          {getPageNumbers().map((p, i) =>
            p === "ellipsis" ? (
              <Pagination.Item key={`ellipsis-${i}`}>
                <Pagination.Ellipsis />
              </Pagination.Item>
            ) : (
              <Pagination.Item key={p} >
                <Pagination.Link
                  isActive={p === currentPage}
                  onPress={() => handlePageChange(p)}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ),
          )}

          <Pagination.Item>
            <Pagination.Next
              className="text-white"
              isDisabled={currentPage === totalPages}
              onPress={() => handlePageChange(currentPage + 1)}
            >
              <span>Next</span>
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    </div>
  );
}
