<?php
namespace App\Http\Controllers;

use App\Questoe;

class QuestoesController extends BaseController
{
    public function __construct()
    {
        $this->classe = Questoe::class;
    }
}
