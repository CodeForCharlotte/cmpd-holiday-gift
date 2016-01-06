<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Household extends Model
{
    protected $table = "household";

    protected $fillable = [
        "nominator_user_id",
        "name_first",
        "name_middle",
        "name_last",
        "dob",
        "race",
        "gender",
        "email",
        "last4ssn",
        "preferred_contact_method"
    ];

    public function child() {
        return $this->hasMany("\App\Child");
    }

    public function address() {
        return $this->hasMany("\App\HouseholdAddress");
    }

    public function phone() {
        return $this->hasMany("\App\HouseholdPhone");
    }
}

# Household::find(1)->children()
# $household = Household::find(1);
# $children = $household->children();