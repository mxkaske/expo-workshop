import { AxiosError } from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Todo } from "../types";

export const useTodos = () => {
  const { error, ...props } = useQuery<Todo[], AxiosError>("/todos");

  useEffect(() => {
    if (error) {
      // TODO: error handling
    }
  }, [error]);

  return { error, ...props };
};

export const useTodo = (id: string | number) => {
  const { error, ...props } = useQuery<Todo, AxiosError>(`/todos/${id}`);

  useEffect(() => {
    if (error) {
      // TODO: error handling
    }
  }, [error]);

  return { error, ...props };
};
