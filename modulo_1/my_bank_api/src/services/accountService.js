import accountRepository from "../repositories/accountRepository";

async function createAccount(account) {
  return await accountRepository.createAccount(account);
}

async function getAccounts() {
  return await accountRepository.getAccounts();
}

async function getAccountById(id) {    
  return await accountRepository.getAccountById(id);
}

async function getAccountIndexById(id) {
  return await accountRepository.getAccountIndexById(id);
}

async function deleteAccount(id) {
  return await accountRepository.deleteAccount(id);
}

async function updateAccount(account) {
  return await accountRepository.updateAccount(account);
}

async function updateBalance(account) {
  const accountToUpdate = await getAccountById(account.id);

  accountToUpdate.balance = account.balance;

  return await updateAccount(accountToUpdate);
}

export default {
  createAccount,
  getAccounts,
  getAccountById,
  getAccountIndexById,
  deleteAccount,
  updateAccount,
  updateBalance
}