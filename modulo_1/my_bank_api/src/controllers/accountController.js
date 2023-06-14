import accountService from "../services/accountService";

async function createAccount(req, res, next) {
  try {
    const data = req.body;

    if (!data.name || data.name.trim() === "") {
      throw Error("Name is required");
    }

    if (data.balance == null || data.balance < 0) {
      throw Error("Balance is required and must be greater than 0");
    }

    res.status(201).send(await accountService.createAccount(data));

    logger.info(`POST /accounts - ${JSON.stringify(newAccount)}`);
  } catch (err) {
    next(err)
  }
}

async function getAccounts(req, res, next) {
  try {
    res.send(await accountService.getAccounts());

    logger.info(`GET /accounts`);
  } catch (err) {
    next(err)
  }
}

async function getAccountById(req, res, next) {
  try {
    const account = await accountService.getAccountById(req.params.id);

    if (!account) {
      throw Error("Account not found");
    }

    res.send(account);

    logger.info(`GET /accounts/${accountId}`);
  } catch (err) {
    next(err)
  }
}

async function deleteAccount(req, res, next) {
  try {
    const accountToDelete = await accountService.getAccountById(req.params.id);

    if (!accountToDelete) {
      throw Error("Account not found");
    }

    await accountService.deleteAccount(accountToDelete.id);

    res.status(204).send();

    logger.info(`DELETE /accounts/${accountId}`);
  } catch (err) {
    next(err)
  }
}

async function updateAccount(req, res, next) {
  try {
    const data = req.body;

    if (!data.name || data.name.trim() === "") {
      throw Error("Name is required");
    }

    if (data.balance == null || data.balance < 0) {
      throw Error("Balance is required and must be greater than 0");
    }

    const updatedAccount = await accountService.updateAccount(data);

    res.send(updatedAccount);

    logger.info(`PUT /accounts - ${JSON.stringify(updatedAccount)}`);
  } catch (err) {
    next(err)
  }
}

async function updateBalance(req, res, next) {
  try {
    const data = req.body;

    if (data.id == null || data.id < 0) {
      throw Error("Id is required and must be greater than 0");
    }

    if (data.balance == null) {
      throw Error("Balance is required and must be greater than 0");
    }

    const updatedAccount = await accountService.updateBalance(data);

    res.send(updatedAccount);

    logger.info(`PATCH /accounts/updateBalance - ${JSON.stringify(updatedAccount)}`);
  } catch (err) {
    next(err)
  }
}

export default {
  createAccount,
  getAccounts,
  getAccountById,
  deleteAccount,
  updateAccount,
  updateBalance
}