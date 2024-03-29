package repository

import (
	"disperinaker-api/model"
)

func (r *repoSert) CreatePesSert(sert model.PesertaSertifikasiSetelahPelatihan) (id int, err error) {
	res := r.DB.Debug().Create(&sert)
	if res.RowsAffected < 1 {
		return 0, res.Error
	}

	return sert.ID, nil
}

func (r *repoSert) GetPesSerts() (serts []model.PesertaSertifikasiSetelahPelatihan, err error) {
	if err = r.DB.
		Debug().
		Find(&serts).
		Error; err != nil {
		return []model.PesertaSertifikasiSetelahPelatihan{}, err
	}

	return serts, nil
}

func (r *repoSert) GetPesSertByID(id int) (sert model.PesertaSertifikasiSetelahPelatihan, err error) {
	if err = r.DB.
		Debug().
		First(&sert, id).
		Error; err != nil {
		return model.PesertaSertifikasiSetelahPelatihan{}, err
	}

	return
}

func (r *repoSert) UpdatePesSert(sert model.PesertaSertifikasiSetelahPelatihan, id int) error {
	sert.ID = id

	res := r.DB.
		Debug().
		Where("id = ?", id).
		UpdateColumns(&sert)
	if res.RowsAffected < 1 {
		return res.Error
	}

	return nil
}

func (r *repoSert) DeletePesSert(id int) error {
	sert := model.PesertaSertifikasiSetelahPelatihan{}
	sert.ID = id

	res := r.DB.Find(&sert)

	if res.RowsAffected < 1 {
		return res.Error
	}

	if err := r.DB.
		Debug().
		Unscoped().
		Delete(&sert).
		Error; err != nil {
		return err
	}

	return nil
}
