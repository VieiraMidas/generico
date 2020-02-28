<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Alternativa extends Model
{
    public $timestamps = false;
    protected $fillable = ['texto', 'correta', 'questao_id'];
    protected $appends = ['links'];

    public function questao()
    {
        return $this->belongsTo(Questoe::class);
    }

    public function getCorretaAttribute($correta): bool
    {
        return $correta;
    }

    public function getLinksAttribute($links): array
    {
        return [
            'self' => '/api/questoes/' . $this->id,
            'questao' => '/api/questoes/' . $this->questao_id
        ];
    }
}
