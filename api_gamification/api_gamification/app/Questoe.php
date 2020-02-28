<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Questoe extends Model
{
    public $timestamps = false;
    protected $fillable = ['enunciado', 'tipo'];
    protected $appends = ['links'];

    public function alternativas()
    {
        return $this->hasMany(Alternativa::class);
    }

    public function getLinksAttribute($links): array
    {
        return [
            'self' => '/api/questoes/' . $this->id,
            'alternativas' => '/api/questoes/' . $this->id . '/alternativas'
        ];
    }
}
