export function cloneDeep<T>(source: T): T {
  if (!isObject(source)) {
    return source;
  }

  const output: Record<string, unknown> = {};

  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }

  return output as T;
}

export const isClient: () => boolean = () => {
  return typeof window !== "undefined";
};

export function isObject(item: unknown): item is Record<string, unknown> {
  return (
    item !== null && typeof item === "object" && item.constructor === Object
  );
}

export function mergeDeep<T extends object, S extends object>(
  target: T,
  source: S,
): T & S {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }

  const output = { ...target, ...source };

  if (isObject(source) && isObject(target)) {
    for (const key in source) {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        (output as Record<string, unknown>)[key] = mergeDeep(
          target[key] as object,
          source[key] as object,
        );
      } else {
        (output as Record<string, unknown>)[key] = isObject(source[key])
          ? cloneDeep(source[key])
          : source[key];
      }
    }
  }

  return output;
}

export function formatDate(date: string): string {
  return Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(new Date(date));
}
