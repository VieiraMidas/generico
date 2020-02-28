<?php
namespace App\Http\Controllers;

use App\Alternativa;

class AlternativasController extends BaseController
{
    public function __construct()
    {
        $this->classe = Alternativa::class;
    }

    public function buscaPorQuestao(int $questaoId)
    {
        $alternativas = Alternativa::query()
            ->where('questao_id', $questaoId)
            ->paginate();

        return $alternativas;
    }
}
