import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

// Use import.meta.url for robust path resolution
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SHARED_DATA_PATH = resolve(__dirname, '../../shared/data');

export interface Link {
  id?: string;
  name: string;
  url: string;
  icon?: string;
  description?: string;
  tags?: string[];
  pinned?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description?: string;
  links: Link[];
}

export interface SearchEngine {
  id: string;
  name: string;
  queryUrl: string;
  method?: string;
  placeholder: string;
  icon: string;
  accentColor?: string;
  type?: string;
}

export interface Shortcuts {
  focusSearch: string;
  openSelected: string;
  nextCategory: string;
  prevCategory: string;
  categoryHotkeys: Record<string, string>;
}

/**
 * 加载链接分类数据
 */
export function loadLinks(): { categories: Category[] } {
  const filePath = resolve(SHARED_DATA_PATH, 'links.yaml');
  const content = readFileSync(filePath, 'utf8');
  return yaml.load(content) as { categories: Category[] };
}

/**
 * 加载搜索引擎配置
 */
export function loadSearchEngines(): SearchEngine[] {
  const filePath = resolve(SHARED_DATA_PATH, 'search-engines.yaml');
  const content = readFileSync(filePath, 'utf8');
  return yaml.load(content) as SearchEngine[];
}

/**
 * 加载快捷键配置
 */
export function loadShortcuts(): Shortcuts {
  const filePath = resolve(SHARED_DATA_PATH, 'shortcuts.json');
  const content = readFileSync(filePath, 'utf8');
  return JSON.parse(content) as Shortcuts;
}
