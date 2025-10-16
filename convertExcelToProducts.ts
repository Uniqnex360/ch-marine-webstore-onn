import XLSX from 'xlsx';
import * as fs from 'fs';

type Specification = { name: string; value?: string };

type Product = {
  id: string;
  sku: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  specifications: Specification[];
};

// ✅ Cleans and converts the spec field to structured data
function parseSpecifications(specRaw: string): Specification[] {
  if (!specRaw || typeof specRaw !== 'string') return [];

  const lines = specRaw
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const specs: Specification[] = [];
  for (const line of lines) {
    const sectionHeader = line.match(/^\[(.+)\]$/); // match [General], [Dimensions], etc.
    if (sectionHeader) {
      specs.push({ name: sectionHeader[1] }); // section header only
    } else {
      const splitIndex = line.indexOf(':');
      if (splitIndex !== -1) {
        const name = line.slice(0, splitIndex).trim();
        const value = line.slice(splitIndex + 1).trim();
        specs.push({ name, value });
      }
    }
  }

  return specs;
}

function convertExcelToProducts(
  filePath: string,
  startingId = 13
): Product[] {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = worksheetToJson(workbook, sheetName);

  const rows = XLSX.utils.sheet_to_json(sheet);

  const products: Product[] = (rows as any[]).map((row, index) => {
    const id = String(startingId + index);

    // ✅ Match the Excel headers exactly
    const sku = row.sku || '';
    const name = row.name || 'Unnamed Product';
    const description = row.description || '';
    const category = row.Category || 'Uncategorized';
    const price = parseFloat((row.price || '0').toString().replace('€','').replace(',','')) || 0;
    const image = row.image || `https://via.placeholder.com/500x750?text=${encodeURIComponent(name)}`;
    const brand = row.brand || '';
    const rating = row.rating || 4.5;
    const reviews = row.reviews || Math.floor(Math.random() * 90 + 10);
    const inStock = row.inStock ?? true;
    const specifications = parseSpecifications(row.specifications || '');

    return {
      id,
      sku,
      name,
      description,
      category,
      price,
      image,
      brand,
      rating,
      reviews,
      inStock,
      specifications,
    };
  });

  return products;
}

function worksheetToJson(workbook: XLSX.WorkBook, sheetName: string) {
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`❌ Sheet "${sheetName}" not found in workbook.`);
  }
  return worksheet;
}

// ✅ Configuration
const excelPath = '/home/lexicon/Downloads/excel.xlsx';
const outputPath = './output-products.ts';
const startingId = 13;

// ✅ Execute
const products = convertExcelToProducts(excelPath, startingId);

const output = `export const products: Product[] = [\n${products
  .map((p) => JSON.stringify(p, null, 2))
  .join(',\n')}\n];`;

fs.writeFileSync(outputPath, output);
console.log(
  `✅ Successfully converted ${products.length} product(s) into '${outputPath}' starting at ID ${startingId}`
);
