module.exports = {
  // create(req, res) {
  //   // return res.ok('ok!');
  //   const params = req.allParams();

  //   if (!params.name ) {
  //     return res.badRequest({err: 'name is required'});
  //   }

  //   Company.create({
  //     name: params.name,
  //     city: params.city,
  //     address: params.address,
  //   })
  //   .then(res.ok)
  //   .catch(res.serverErrors);

  // },
  async create(req, res) {
    try {
      const params = req.allParams();
    
      if (!params.name ) {
        return res.badRequest({err: 'name is required'});
      }
    
      const company = await Company.create({
        name: params.name,
        city: params.city,
        address: params.address,
      });

      return res.ok(company);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async find(req, res) {
    try {
      const companies = await Company.find();
      return res.ok(companies);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async findOne(req, res) {
    try {
      const params = req.allParams();
      const company = await Company.findOne({id: params.id});
      return res.ok(company);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async update(req, res) {
    try {
      const params = req.allParams();
      const companyData = {};

      if (params.address) {
        companyData.address = params.address;
      }
      
      if (params.city) {
        companyData.city = params.city;
      }
      
      if (params.name) {
        companyData.name = params.name;
      }

      const company = await Company.updateOne({id: params.id},  companyData);
      return res.ok(company);
    } catch (err) {
      return res.serverError(err);
    }
  },
  async delete(req, res) {
    try {
      const params = req.allParams();
      const company = await Company.destroy({id: params.id});
      return res.ok(company);
    } catch (err) {
      return res.serverError(err);
    }
  },
};