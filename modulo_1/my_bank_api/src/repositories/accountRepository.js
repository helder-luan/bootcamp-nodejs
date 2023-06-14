import { fileURL, readFile, writeFile } from '../providers/fileSystem.js';

async function insertAccount() {
  const accountsData = JSON.parse(await readFile(fileURL));

  const newAccount = {
    id: accountsData.nextId++,
    name: account.name,
    balance: account.balance
  }

  accountsData.accounts.push(newAccount);

  await writeFile(fileURL, JSON.stringify(accountsData));

  return newAccount;
}

async function getAccounts() {
  const { accounts } = JSON.parse(await readFile(fileURL));

  return accounts;
}

async function getAccountById(id) {
  const accounts = await getAccounts();

  const account = accounts.find(account => account.id == id);

  if (!account) {
    throw Error("Account not found");
  }

  return account;
}

async function getAccountIndexById(id) {
  const accounts = await getAccounts();

  const index = accounts.findIndex(account => account.id == id);

  return index;
}

async function deleteAccount(id) {
  const accountsData = JSON.parse(await readFile(fileURL));

  accountsData.accounts = accountsData.accounts.filter(account => account.id != id);

  await writeFile(fileURL, JSON.stringify(accountsData));
}

async function updateAccount(account) {
  const accountsData = JSON.parse(await readFile(fileURL));
  
  const index = await getAccountIndexById(account.id);

  if (index < 0) {
    throw Error("Account not found");
  }

  const updatedAccount = {
    id: account.id,
    name: account.name,
    balance: account.balance
  }

  accountsData.accounts[index] = updatedAccount;

  await writeFile(fileURL, JSON.stringify(accountsData));

  return accountsData.accounts[index];
}

export default {
  insertAccount,
  getAccounts,
  getAccountById,
  getAccountIndexById,
  deleteAccount,
  updateAccount
}