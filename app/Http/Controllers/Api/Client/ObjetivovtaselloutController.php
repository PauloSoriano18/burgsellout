<?php

namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\Controller;
use App\Models\Objetivovtasellout;
use Illuminate\Http\Request;

class ObjetivovtaselloutController extends Controller
{
    //
    public function index($canal)
    {
        $data = Objetivovtasellout::where('Canal_Vta', $canal)->get();
        return response()->json($data, 200);
    }
}
